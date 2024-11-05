import React from 'react';
import './progressBar.scss';

export default function ProgressBar({ram}) {
    const ramProgress = ram > 0 ? Math.min((ram/50)*100, 98) : 0;
    let showCursor = 'flex';
    if(!ramProgress) {
        showCursor = 'none';
    }

    return (
        <div className="progress-bar">
            <div className="lines">
                <div className="small-line"/>
                <div className="devider"/>
                <div className="normal-line"/>
                <div className="devider"/>
                <div className="big-line"/>
                <div className="cursor-block"
                     style={{
                         left: `${ramProgress}%`,
                         display: `${showCursor}`
                     }}>
                    <div className="line-cursor"/>
                    <div className="cursor-text">{ram}</div>
                </div>

            </div>
            <div className="subtitl">
                <div className="subtitl-text">0 GB</div>
                <div className="subtitl-text">16 GB</div>
                <div className="subtitl-text">32 GB</div>
                <div className="subtitl-text">50 GB</div>
            </div>
            <div className="info">
                <div className="info-figure"/>
                <div className="info-text">Recommended</div>
            </div>
        </div>
    );
}
