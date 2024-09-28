const DataItem = ({ detailData, isImage }) => {
    return isImage === 'y' ? <img src={detailData} /> : <div className="text">{detailData}</div>;
};

DataItem.defaultProps = {
    isImage: 'n',
};

export default DataItem;
