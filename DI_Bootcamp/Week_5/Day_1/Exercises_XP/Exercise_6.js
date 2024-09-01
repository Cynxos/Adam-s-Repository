(function(numChildren, partnerName, geoLocation, jobTitle) {
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    document.body.innerHTML = `<p>${message}</p>`;
})(3, 'Alex', 'New York', 'Software Developer');
