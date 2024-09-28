import { useContext, useEffect, useState } from 'react';
import { DateContext } from '../App';
import { OcidContext } from '../pages/Detail';

import Preset from './Preset';

const CashItem = ({ urlInfo }) => {
    const date = useContext(DateContext);
    const ocid = useContext(OcidContext);
    const [data, setData] = useState();

    const FetchData = async ({ urlInfo }) => {
        const urlString = `https://open.api.nexon.com/maplestory/v1/${urlInfo}?ocid=${ocid}&date=${date}`;

        const answer = await fetch(urlString, {
            headers: {
                'x-nxopen-api-key': process.env.REACT_APP_API_KEY,
            },
        });
        setData(await answer.json());
    };

    useEffect(() => {
        FetchData({ urlInfo });
    }, [urlInfo, date, ocid]);

    return (
        <div>
            {data && (
                <div className="CashItem">
                    <Preset data={data} isBasePreset={'y'} />
                    <Preset data={data} />
                </div>
            )}
        </div>
    );
};

export default CashItem;
