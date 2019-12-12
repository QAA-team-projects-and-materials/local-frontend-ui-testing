import React, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';
import Avatar from '../../Avatar';
import { BeatLoader } from 'react-spinners';

const UploadImageModal = ({
  isShowing,
  hide,
  // toggleModel,
  handleImageUpload,
  status,
  handleStatusChange,
  imagePreview,
  handleSubmitForm,
  createPost,
  auth,
  override,
  loading,
}) => {
  const [error, setError] = useState('');
  let handlePostImageSize = e => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size >= MAX_POST_IMAGE_SIZE) {
      setError(
        `File size should be less then ${MAX_POST_IMAGE_SIZE / 1000000}MB`
      );
      return;
    }
    handleImageUpload(e);
    setError('');
  };
  return (
    <Modal
      show={isShowing}
      onHide={() => hide()}
      dialogClassName='window-popup update-header-photo'
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <h6 className='title'>Add Photos</h6>
      </Modal.Header>
      <ModalBody>
        <div
          className=''
          id='update-header-photo'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='update-header-photo'
          aria-hidden='true'
        >
          <div className='' role='document'>
            <div className='modal-content'>
              <div className='modal-body'>
                <form class='d-flex p-3'>
                  <div class='author-thumb'>
                    <Avatar image={auth.user.image} />
                  </div>
                  <div class='form-group label-floating is-empty w-100 ml-3 mb-0'>
                    <BeatLoader
                      css={override}
                      sizeUnit={'px'}
                      size={20}
                      color={'#123abc'}
                      loading={loading}
                    />
                    <label class='control-label'>
                      Share what you are thinking here...
                    </label>
                    <textarea
                      class='form-control'
                      name='status'
                      value={status}
                      onChange={e => handleStatusChange(e)}
                    />
                  </div>
                </form>

                {imagePreview && (
                  <div class='thumbnail-gallery-items'>
                    <ul class='d-flex p-0 m-3 list-unstyled'>
                      <li>
                        <img
                          class='video-bnr'
                          src={imagePreview}
                          alt='images'
                        />

                        <button type='button' class='btn p-0 m-0'>
                          x
                        </button>
                      </li>
                      {/* <li class='add-more-posts'>
                        <span>+</span>
                      </li> */}
                    </ul>
                  </div>
                )}
                <div class='upload-content'>
                  <ul class='d-flex p-3 m-0 list-unstyled justify-content-between align-items-center flex-wrap'>
                    <li>
                      <button type='button' class='btn px-3 py-2 m-0'>
                        <input
                          type='file'
                          name='image'
                          id='multi'
                          onChange={e => handlePostImageSize(e)}
                        />
                        <svg
                          height='24'
                          viewBox='0 0 24 24'
                          width='24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            class='heroicon-ui'
                            d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 8.59V6H4v6.59l4.3-4.3a1 1 0 0 1 1.4 0l5.3 5.3 2.3-2.3a1 1 0 0 1 1.4 0l1.3 1.3zm0 2.82l-2-2-2.3 2.3a1 1 0 0 1-1.4 0L9 10.4l-5 5V18h16v-2.59zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
                          />
                        </svg>
                        Photo/Video
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        class='btn btn-saved px-3 py-2 m-0'
                        onClick={e => handleSubmitForm(e, createPost)}
                      >
                        Save
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default UploadImageModal;
