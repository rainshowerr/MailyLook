import { useState, useEffect, createContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CharacterImage from '../components/CharacterImage';
import DateInput from '../components/DateInput';
import CharacterInput from '../components/CharacterInput';
import CashItem from '../components/CashItem';

export const OcidContext = createContext();

const Detail = ({ setDate }) => {
    const navigate = useNavigate();
    const [ocid, setOcid] = useState('');
    const { characterName } = useParams(); // 구조 분해 할당

    const fetchOcid = async () => {
        const urlString = 'https://open.api.nexon.com/maplestory/v1/id?character_name=' + characterName;

        const answer = await fetch(urlString, {
            headers: {
                'x-nxopen-api-key': process.env.REACT_APP_API_KEY,
            },
        });
        const data = await answer.json();
        setOcid(data.ocid);
    };

    useEffect(() => {
        fetchOcid();
    }, [characterName]);

    return (
        <div className="Detail">
            <div className="header">
                <button
                    type="button"
                    className="back-button"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/back.png`} />
                </button>
                <div className="input_wrapper">
                    <DateInput setDate={setDate} />
                    <CharacterInput />
                </div>
            </div>
            <OcidContext.Provider value={ocid}>
                {ocid && (
                    <div className="CharacterInfo_wrapper">
                        <CharacterImage urlInfo={'character/basic'} />
                        <h4>{characterName}</h4>
                        <CashItem urlInfo={'character/cashitem-equipment'} />
                    </div>
                )}
            </OcidContext.Provider>
            <div className="footer">
                Copyright 2024. 엘리시움@읜준 all rights reserved. <br />
                This site is not associated with NEXON Korea. Data based on NEXON Open API.
            </div>
        </div>
    );
};

export default Detail;
