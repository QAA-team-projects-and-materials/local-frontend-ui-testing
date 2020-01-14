import React from 'react';
import { useStore } from 'store';
import { generatePath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';
import { UPDATE_NOTIFICATION_SEEN } from 'graphql/notification';

import Avatar from 'components/Avatar';

import * as Routes from 'routes';

const Notifications = ({ client, refetch }) => {
  const [{ auth }] = useStore();
  const updateNotificationSeen = async () => {
    try {
      await client.mutate({
        mutation: UPDATE_NOTIFICATION_SEEN,
        variables: {
          input: {
            userId: auth.user.id,
          },
        },
      });
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(notification)
  return (
    <div className='icon-outer'>
      <div className='control-icon more has-items'>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/notification-img_cporyu.png'
          alt='notifi'
        />
        {!auth.user.newNotifications.length ? null : (
          <div className='label-avatar bg-primary'>
            {auth.user.newNotifications.length}
          </div>
        )}
        <div className='more-dropdown more-with-triangle triangle-top-center'>
          <div className='ui-block-title ui-block-title-small'>
            <h6 className='title'>Notifications</h6>
            {/* <a href>Mark all as read</a>
            <a href>Settings</a> */}
          </div>

          <div className='mCustomScrollbar' data-mcs-theme='dark'>
            <ul className='notification-list'>
              {auth.user.newNotifications.length === 0 && (
                <li>
                  <div className='notification-event'>
                    <div>No Notifications</div>
                  </div>
                </li>
              )}
              {auth.user.newNotifications.map(notification => {
                console.log(auth)
                return (
                  <>
                    {notification.like && (<li key={notification.id}>
                      <div className='d-flex'>
                        <div className='author-thumb mx-2'>
                          <Avatar image={notification.author.image} />
                        </div>
                        <div className='notification-detail mx-2'>
                          <Link
                            to={generatePath(Routes.USER_PROFILE, {
                              username: notification.author.username,
                            })}
                          >
                            <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
                          </Link>
                          {' '}
                          <Link
                            to={generatePath(Routes.POST, {
                              id: notification.like.post.id,
                            })}
                          >
                            <p>liked your post</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    )}
                     {notification.comment && (<li key={notification.id}>
                      <div className='d-flex'>
                        <div className='author-thumb mx-2'>
                          <Avatar image={notification.author.image} />
                        </div>
                        <div className='notification-detail mx-2'>
                          <Link
                            to={generatePath(Routes.USER_PROFILE, {
                              username: notification.author.username,
                            })}
                          >
                            <h6 className='mb-1'>{`${notification.author.firstName} ${notification.author.lastName}`}</h6>
                          </Link>
                          <Link
                            to={generatePath(Routes.POST, {
                              id: notification.comment.post.id,
                            })}
                          >
                            <p>Commented on your post</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
          <Link       
            className='view-all bg-primary'
            to={generatePath(Routes.NOTIFICATIONS)} >
            View All Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  client: PropTypes.object.isRequired,
};

export default withApollo(Notifications);
