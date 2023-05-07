import React from 'react'
import Man from './../../../images/man.jpg'
import Woman from './../../../images/woman.jpg'
import Kids from './../../../images/kids.jpg'
import Sales from './../../../images/sale.jpg'

export default function Categories() {
    return (
        <div className='categories_blocks'>
            <div className='left'>
                <div className='img_block woman'>
                    <div className='bg_shadow'>
                        <p>Woman</p>
                        <p className='goNext'>перейти</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='top'>
                    <div className='img_block man'>
                        <div className='bg_shadow'>
                            <p>Man</p>
                            <p className='goNext'>перейти</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='img_block kids'>
                        <div className='bg_shadow'>
                            <p>Kids</p>
                            <p className='goNext'>перейти</p>
                        </div>
                    </div>
                    <div className='img_block sales'>
                        <div className='bg_shadow'>
                            <p>Sale</p>
                            <p className='goNext'>перейти</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
