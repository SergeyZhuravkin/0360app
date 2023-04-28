import { useEffect, useState } from "react";
import textImg from "../assets/img/image1.jpeg";
//import backgroundImg from "../assets/img/image2.jpg";

export const Messages = () => {
	let [count, setCount] = useState(0);
	const [advice, setAdvice] = useState("");

	useEffect(() => {
		const url = "https://api.adviceslip.com/advice";
		
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json.slip.advice);
				setAdvice(json.slip.advice);
			} catch (error) {
				console.log("Error ", error);
			}
		}
		fetchData();
		
	},[]);

	return (
		<>
		<div className="row">
			<div className="col-md-6">
				<img src={textImg} alt="" className="img-fluid" />
			</div>
			<div className="col-md-6">
				<p className="text-2xl font-bold text-red-500 mb-2">Количество кликов: {count}</p>
				<button onClick={() => {setCount(count + 1);}} className="bg-zinc-500 hover:bg-zinc-700 text-white rounded-lg p-6">Нажми на меня</button>
			</div>
		</div>
		<div className="row">
			<div className="col-xl-6 offset-6">
				<p className="text-center text-lg text-blue-600">{advice}</p>
			</div>
		</div>
		</>
	)
};