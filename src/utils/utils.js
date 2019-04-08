export default {
    formatDate(time) {
        if(!time) return '';
        const now = new Date(time);
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

}