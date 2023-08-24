export default {
	
	user: ()=>{
		const fullname = Form1.data.fullName;
		const email = Form1.data.email ;
		const phone = Form1.data.phone;
		const address = Form1.data.address;
			storeValue("fullname",fullname)
		
		return user.run({fullname,email,phone,address})
	    
		.then(()=>{ 
			navigateTo('Page2');
		})
		
	}
	
	
}