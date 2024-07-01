import React from "react";
import '../../App.css';


<form name="Formwise.ai" id="script">
    <iframe id="scriptureSync" src="ScriptureSync.html"></iframe>
</form>

function iframeRef( frameRef ) {
    return frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument
}

var inside = iframeRef( document.getElementById('scriptureSync'))

export default function NewEntry() {
    return <h1 className='newentry'>What`s on your mind?</h1>
    return inside

}

