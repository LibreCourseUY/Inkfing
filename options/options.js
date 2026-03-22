async function saveOptions(e) {
    e.preventDefault();
    await chrome.storage.local.set({
        useExperimental: document.querySelector("#useExperimental").checked
    });
    restoreOptions();
}

async function restoreOptions() {
    try {
        let res = await chrome.storage.local.get('useExperimental');
        document.querySelector("#managed-useExperimental").innerText = res.useExperimental;
    } catch (error) {
        document.querySelector("#managed-useExperimental").innerText = `Unexpected managed storage error: ${error.message}`;
    }

    res = await chrome.storage.local.get('useExperimental');
    document.querySelector("#useExperimental").checked = res.useExperimental || false;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);