const characterName = '읜준';

const FetchData = async ({ urlInfo }) => {
    const yesterday = new Date();
    const date =
        yesterday.getFullYear() +
        '-' +
        (yesterday.getMonth() + 1 < 9 ? '0' + (yesterday.getMonth() + 1) : yesterday.getMonth() + 1) +
        '-' +
        (yesterday.getDate() < 9 ? '0' + yesterday.getDate() : yesterday.getDate());
    const ocid = '486a46eae7fb32d252f67f100ba889c8efe8d04e6d233bd35cf2fabdeb93fb0d';
    const urlString = 'https://open.api.nexon.com/maplestory/v1/' + urlInfo + '?' + 'ocid=' + ocid + `&date=` + date;

    const answer = await fetch(urlString, {
        headers: {
            'x-nxopen-api-key': process.env.REACT_APP_API_KEY,
        },
    });
    const data = await answer.json();
    return data;
};

FetchData({ urlInfo: 'character/basic' });
