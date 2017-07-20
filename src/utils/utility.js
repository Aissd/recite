// talkingdata数据上报
function onEvent(keyword, label) {
    try {
        if(label) {
            // TDAPP.onEvent(keyword, label);
        } else {
            // TDAPP.onEvent(keyword);
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    onEvent: onEvent
};