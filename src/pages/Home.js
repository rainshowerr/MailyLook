import DateInput from '../components/DateInput';
import CharacterInput from '../components/CharacterInput';

const Home = ({ setDate }) => {
    // const handleEnterCharacterSearch = (e) => {
    //     if (e.target.key == 'Enter') handleCharacterSearch();
    // };

    return (
        <div className="Home">
            <h2>메일리룩</h2>
            <DateInput setDate={setDate} />
            <CharacterInput />
        </div>
    );
};

export default Home;
