import React, {Component} from 'react';

export default class Head extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  items: []
		};
	  }

	  // API UNTUK MENAMPILKAN DATA USER
	  componentDidMount() {
		fetch("https://randomuser.me/api?results=5&exc=login%2Cregistered%2Cid%2Cnat&nat=us&noinfo")
		  .then(res => res.json())
		  .then(parsedJSON => parsedJSON.results.map(data => (
			{
				photo: `${data.picture.thumbnail}`,
			  	firstName: `${data.name.first}`,
			  	lastName: `${data.name.last}`,
			  	location: `${data.location.state}, ${data.location.city}`,
				  photoDetail: `${data.picture.large}`,
				  dobDate: `${data.dob.date}`,
				  gender: `${data.gender}`,
				  email: `${data.email}`,
				  phone: `${data.phone}`,
				  cell:  `${data.cell}`,
				  street : `${data.location.street.number}`,
				  latitude : `${data.location.coordinates.latitude}`,
				  longitude : `${data.location.coordinates.longitude}`,
				  
   
			}
		  )))
		  .then(items => this.setState({
			items,
			isLoaded: false
		  }))
		  .catch(error => console.log('data gagal diunduh', error))
	  }

	render(){
		const {items } = this.state;
		console.log(items.length)
		return(
			<div>
				{
              items.length > 0 ? items.map(item => {
              const {id,photo, firstName, lastName, location, thumbnail, gender, email, phone, cell,street, latitude,longitude} = item;
               return (
 
               <div key={id} style={{marginTop: '110px'}}>
               <center><img src={photo} alt={firstName} /> </center><br />
               <div>
                  Nama depan : {firstName} <br/>
				  Nama Belakang : {lastName}<br/>
				  Lokasi : {location} <br/>
				  Gender : {gender}<br/>
				  Email : {email} <br/>
				  Phone: {phone} <br/>
				  Hp: {cell} <br/>
				  Detail Alamat:  {street}<br/> {latitude}<br/> {longitude}
                </div>
 
              </div>
              );
            }) : null
		  }
				<header className="header-area">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12">
			                    <nav className="navbar navbar-expand-lg">
			                        <a className="navbar-brand" href="index.html">
										<p>Kelola Kotak</p>
			                        </a> {/*<!-- Logo -->*/}

									<button className="btn-success" style={{ textAlign:'right !important'}}><i className="plus"></i>Tambah Kontak</button>
			                    
			                    </nav> {/*<!-- navbar -->*/}
			                </div>
			            </div> {/*<!-- row -->*/}
			        </div> {/*<!-- container -->*/}
			    </header>
			
		  </div>
		

       
			
			)
	}
}