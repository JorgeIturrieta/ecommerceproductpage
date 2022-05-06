import React from 'react';
import { Description, Gallery } from '../components/MainContent';

function MainContent() {
    return (
        <main className="main">
            <Gallery />
            <Description />
        </main>
    );
}

export default MainContent;
