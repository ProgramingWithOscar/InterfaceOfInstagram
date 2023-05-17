

const Account = () => {
    return (
        <div>
            <nav className="flex gap-7 mb-5">
                <div>
                    <img src="https://img.freepik.com/free-icon/left-arrow_318-162581.jpg?w=2000" className="w-5 h-5 mt-2"></img>
                </div>
                <div >
                    <span className="font-bold font-xl">oscarpoveda</span>
                </div>
            </nav>

            {/* Other section - foto de perfil */}

            <div className="grid grid-cols-4 items-center justify-center">
                <div >
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="rounded-full h-20 w-20 object-cover ml-4"></img>
                </div>
                <div className="text-center">
                    <span>1,132</span>
                    <p>Post</p>
                </div>
                <div className="text-center">
                    <span>60k</span>
                    <p>Followers</p>
                </div>

                <div className="text-center">
                    <span>4</span>
                    <p>Following</p>
                </div>
            </div>

            {/* Info */}

            <div className="py-2">
                <div>
                    <span className="font-bold ml-3">Oscar Poveda</span>
                </div>
                <div>
                    <span className="ml-3">I love programming </span>
                </div>
                <div>
                    <a className="ml-3 text-blue-600">www.oscarpoveda.com</a>
                </div>

          
        </div>
              {/* Botones: follow - message - agregar */}

              <div className="flex  gap-2 px-3 mb-6">
                    <div>
                        <button className="bg-[#1978f2] text-white px-2 py-1 rounded-lg w-40">Follow</button>
                    </div>
                    <div>
                        <button className="bg-[#dededf] w-32 px-2 py-1 rounded-lg">Message</button>
                    </div>
                    <div className="bg-[#dededf] w-20 rounded-lg">
                        <img src="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/23-512.png" className="w-8 h-8 ml-3"></img>
                    </div>
                </div>
                {/* Historias destacadas */}
               <div className="grid grid-cols-5 px-3 mb-4">
                <div>
                    <img src="https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?cs=srgb&dl=pexels-trace-hudson-2896668.jpg&fm=jpg" className="rounded-full w-14 h-14 ml-1 border-gray-500 border p-[2px]"></img>
                   <span className="text-sm">Memories</span>  
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?cs=srgb&dl=pexels-trace-hudson-2896668.jpg&fm=jpg" className="rounded-full w-14 h-14 ml-1 border-gray-500 border p-[2px]"></img>
                    <span className="text-sm">Memories</span>  
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?cs=srgb&dl=pexels-trace-hudson-2896668.jpg&fm=jpg" className="rounded-full w-14 h-14 ml-1 border-gray-500 border p-[2px]"></img>
                    <span className="text-sm">Memories</span>  
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?cs=srgb&dl=pexels-trace-hudson-2896668.jpg&fm=jpg" className="rounded-full w-14 h-14 ml-1 border-gray-500 border p-[2px]"></img>
                    <span className="text-sm">Memories</span>  
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?cs=srgb&dl=pexels-trace-hudson-2896668.jpg&fm=jpg" className="rounded-full w-14 h-14 ml-1 border-gray-500 border p-[2px]"></img>
                    <span className="text-sm">Memories</span>  
                </div>
               </div> 
                {/* More icons */}
               <div className="flex justify-between px-3">
                <div >
                    <img src="https://static.vecteezy.com/system/resources/previews/020/389/064/non_2x/square-grid-icon-free-png.png" className="w-6 h-7"></img>
                </div>
                <div>
                    <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/instagram-reels-icon.png" className="w-6 h-7"></img>
                </div>

                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png" className="w-7 h-7"></img>
                </div>
               </div>
            </div>
    );
}

export default Account;
