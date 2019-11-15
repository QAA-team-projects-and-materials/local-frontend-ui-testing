import React from 'react'

export default function BirthdaysAlert() {
    return (
        <div class="widget w-birthday-alert">
            <div class="icons-block">
                {/* <svg class="olymp-cupcake-icon">
                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use>
							</svg> */}
                <a href="#" class="more">
                    {/* <svg class="olymp-three-dots-icon">
                <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
                </a>
            </div >

            <div class="content">
                <div class="author-thumb">
                    <img src="img/avatar48-sm.jpg" alt="author" />
                </div>
                <span>Today is</span>
                <a href="#" class="h4 title">Marina Valentine’s Birthday!</a>
                <p>Leave her a message with your best wishes on her profile page!</p>
            </div>
        </div>
    )
}