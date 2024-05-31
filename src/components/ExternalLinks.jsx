import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

function ExternalLinks(props) {
    const [expanded, setExpanded] = useState(true);
    const [activekey, setActiveKey] = useState('1');

    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
    };

    return (
        <span className="external-links">
            <a
                className="mt-[6px] hover:text-rosePine-foam"
                href={props.githubLink}
            >
                <FaGithub
                    style={{
                        fontSize: 20,
                    }}
                ></FaGithub>
            </a>
            {props.openLink && (
                <a
                    className="ml-[10px] text-rosePine-foam"
                    href={props.openLink}
                >
                    <MdOpenInBrowser
                        style={{
                            fontSize: 25,
                        }}
                    ></MdOpenInBrowser>
                </a>
            )}
        </span>
    );
}

export default ExternalLinks;
