import textImg from "../assets/img/image1.jpeg";
import backgroundImg from "../assets/img/image2.jpg";
export const Messages = () => {
	return (
		<>
		<div className="row">
			<div className="col-md-6">
				<img src={textImg} alt="" className="img-fluid" />
			</div>
			<div className="col-md-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere delectus nemo ea dolore quia vitae inventore ad maxime quibusdam doloremque natus quis quisquam quam distinctio autem consequuntur illo, rerum repudiandae!
			Aspernatur excepturi, molestiae omnis ad accusantium quis quos fuga aliquam vero ex! Adipisci ut cum, fugiat autem ipsa voluptas explicabo. Exercitationem, soluta? Excepturi distinctio maxime sint dolorem officiis? Repudiandae, laboriosam.
			Veritatis quisquam labore inventore repellat ipsam dicta consequuntur odio cum, deleniti iste, corporis voluptatem et hic, facilis veniam blanditiis numquam voluptas qui. Optio ducimus, sapiente hic tempore modi cum ullam!</div>
		</div>
		<div className="row">
			<div className="col-xl-6 offset-6" style={{backgroundImage: `url(${backgroundImg})`}}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere delectus nemo ea dolore quia vitae inventore ad maxime quibusdam doloremque natus quis quisquam quam distinctio autem consequuntur illo, rerum repudiandae!
			Aspernatur excepturi, molestiae omnis ad acc
			</div>
		</div>
		</>
	)
};