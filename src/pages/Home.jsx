import axios from "axios";
import React, { useEffect, useState } from "react"

function Home() {

	const [q , setQuote] = useState([]);

	useEffect(()=> {
		fetch();
	}, [])

	function fetch(){
		axios.get('https://dummyjson.com/quotes/random')
		.then(response=>{
				setQuote(response.data)
				console.log(response.data)
			}
		)		
		.catch((error)=>{
			console.log(error);
		})
	}

	function getNewQuote(){
		fetch();
	}


	return (
		<section className="row my-5">
			<div className="col-4 offset-4">
				<div class="card">
					<img src={`https://source.unsplash.com/random/?img=${q.id}`} class="card-img-top" width="100px" height="300px" alt="Fissure in Sandstone"/>
					<div class="card-body">
						<h4 class="card-title">{q.quote}</h4>
						<p class="card-text">{q.author}</p>
					</div>
				<button type="button" onClick={getNewQuote} className="btn btn-primary m-2">Button</button>

				</div>



			</div>
		

		</section>
	)
}

export default Home
