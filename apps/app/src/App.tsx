import React from 'react';
import {AppShell} from 'ui'

// @ts-ignore
import {SharedComponent} from "remote/SharedComponent";

function App() {
    return (
        <>
            <AppShell title="Brand">
                <SharedComponent></SharedComponent>
            </AppShell>
        </>
    );
}

export default App;
