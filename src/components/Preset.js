import { useState, useEffect } from 'react';
import DataItem from './DataItem';

const Preset = ({ data, isBasePreset }) => {
    const [presetNum, setPresetNum] = useState('base');

    useEffect(() => {
        setPresetNum(data.preset_no);
    }, [data]);

    const presetData = {
        base: data.cash_item_equipment_base,
        1: data.cash_item_equipment_preset_1,
        2: data.cash_item_equipment_preset_2,
        3: data.cash_item_equipment_preset_3,
    };

    const getSlotItem = (slot) => {
        if (isBasePreset === 'y') return presetData['base'].filter((it) => it.cash_item_equipment_slot === slot);
        else return presetData[presetNum].filter((it) => it.cash_item_equipment_slot === slot);
    };

    const showSlotItem = (slot) => {
        return getSlotItem(slot)[0] ? (
            <div className="cashItem_wrapper">
                <DataItem detailData={getSlotItem(slot)[0].cash_item_icon} isImage="y" />
                <DataItem detailData={getSlotItem(slot)[0].cash_item_name} isImage="n" />
            </div>
        ) : (
            <div className="NoCashItem_wrapper">
                <DataItem detailData={'-'} isImage="n" />
            </div>
        );
    };

    const showAllItem = (className) => {
        return (
            <div className={className}>
                {showSlotItem('모자')}
                {showSlotItem('얼굴장식')}
                {showSlotItem('눈장식')}
                {showSlotItem('귀고리')}
                {showSlotItem('상의')}
                {showSlotItem('하의')}
                {showSlotItem('무기')}
                {showSlotItem('망토')}
                {showSlotItem('장갑')}
                {showSlotItem('신발')}
            </div>
        );
    };

    return (
        { presetNum } && (
            <div className="Preset_wrapper">
                {isBasePreset === 'n' ? (
                    <div className="Preset">
                        <div className="PresetButton">
                            <button className={`button_1_${presetNum}`} onClick={() => setPresetNum(1)}>
                                프리셋 1
                            </button>
                            <button className={`button_2_${presetNum}`} onClick={() => setPresetNum(2)}>
                                프리셋 2
                            </button>
                            <button className={`button_3_${presetNum}`} onClick={() => setPresetNum(3)}>
                                프리셋 3
                            </button>
                        </div>
                        {showAllItem('OtherPreset')}
                    </div>
                ) : (
                    <div className="Preset">{showAllItem('BasePreset')}</div>
                )}
            </div>
        )
    );
};

Preset.defaultProps = {
    isBasePreset: 'n',
};

export default Preset;
