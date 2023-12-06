import React, { useEffect, useState } from 'react';
import './index.css';
import { isColorLight } from '../../utils/isColorLight';

export function Tag({ background, id, lbl }) {

    return (
        <div id={id} className={`Tag ${isColorLight(background) ? 'contraste' : ''}`} style={{ background: background }}>
            <div className='labelTag'>{lbl}</div> <div>100</div>
        </div>
    );
}
