import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CharacterInput = () => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState('');

    return (
        <div className="CharacterInput">
            <input
                className="searchInput"
                type="text"
                placeholder="캐릭터 닉네임을 입력해주세요"
                value={searchData}
                onChange={(e) => {
                    setSearchData(e.target.value);
                }}
            />
            <button
                type="button"
                className="searchButton"
                onClick={() => {
                    navigate(`/detail/${searchData}`);
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/search.png`} />
            </button>
        </div>
    );
};

export default CharacterInput;
