import { useContext, useEffect, useState } from 'react';
import { DateContext } from '../App';
import { OcidContext } from '../pages/Detail';
import DataItem from './DataItem';

const CharacterImage = ({ urlInfo }) => {
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
	}, [date, ocid]);

	return <div className="CharacterImage">{data && <DataItem detailData={data.character_image} isImage="y" />}</div>;
};

export default CharacterImage;
