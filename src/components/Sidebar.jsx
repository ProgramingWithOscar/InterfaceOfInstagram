
const Sidebar = () => {
    return (
      <div>
        <nav>
          <div className="w-48 -ml-4 mt-2 flex items-center justify-between">
            <img
              src="https://graffica.info/wp-content/uploads/instagram-old-600.jpg"
              alt="logo"
            ></img>

            <div className=" w-32 absolute right-0 flex justify-between mr-2">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_351299.png"
                className="w-8 h-8"
              ></img>

              <img
                src="https://static.vecteezy.com/system/resources/previews/000/379/885/original/favorite-vector-icon.jpg"
                className="w-8 h-8"
              ></img>

              <img src="https://static.thenounproject.com/png/4805005-200.png" className="w-8 h-8"></img>
            </div>
          </div>
        </nav>

        <div className="px-2 py-4 grid grid-cols-4 text-center border-b-2">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="w-[70px] rounded-full object-cover h-[70px]"
            ></img>
            <img
              src="https://icon-library.com/images/icon-plus/icon-plus-12.jpg"
              className="w-[30px] absolute left-[70px] top-[117px] bg-white rounded-full"
            ></img>
            <span>Your history</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/12/messi-record-instagram-planeta-urbano-01.jpg?resize=1080%2C781&ssl=1"
              className="w-[70px] rounded-full object-cover h-[70px] border-2 border-[#fe2300] p-1"
            ></img>
            <span>Leo_messi</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://media.revistavanityfair.es/photos/60e838e1f65f37760f5bea46/1:1/w_2277,h_2277,c_limit/200015.jpg"
              className="w-[70px] rounded-full object-cover h-[70px]"
            ></img>
            <span>cristiano.14</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://eldiariony.com/wp-content/uploads/sites/2/2022/03/GettyImages-1312731294-e1648037699729.jpg?quality=75&strip=all&w=1200"
              className="w-[70px] rounded-full object-cover h-[70px]"
            ></img>
            <span>karol.g</span>
          </div>
        </div>
        {/* Main */}

        <div>
          <div className="w-[60px] h-[60px] m-2 text-center rounded-full items-center p-1 border-2 border-[#fe2300] flex gap-2 ">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/11/09/44/logo-3216310_640.png"
              className=""
            ></img>

            <span className="font-bold text-lg">Marvel</span>
          </div>

          <div className="mb-[10px]">
            <img
              src="https://elcomercio.pe/resizer/GVmsvUvB9CcPkl9ve1CMXnIn1IU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PJK54BMEE5FAHEL7VDU7COIVIQ.jpg"
              className="h-[400px] w-full object-cover"
            ></img>

            <div className="w-[30px] flex gap-2">
              <img src="https://static.vecteezy.com/system/resources/previews/000/379/885/original/favorite-vector-icon.jpg"></img>

              <img src="https://icons-for-free.com/iconfiles/png/512/comment-131965017416332557.png"></img>

              <img src="https://cdn-icons-png.flaticon.com/512/2343/2343605.png"></img>
            </div>
            <div className="pl-2">
              <span>
                Like by <span className="font-bold ">oscarpoveda</span> and{" "}
                <span className="font-bold">905,000 others</span>
              </span>
            </div>

            <div className="ml-2">
              <span className="font-bold">Marvel</span>
              <span className="ml-1">
                Start your countdown to the glorious arrival of Marvel Studios
                #loki
              </span>
            </div>
            <div className="ml-2 mt-3">
              <span className="text-gray-400">View all 100 comments</span>
            </div>
          </div>

          <div>
            <img
              src="https://elcomercio.pe/resizer/GVmsvUvB9CcPkl9ve1CMXnIn1IU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PJK54BMEE5FAHEL7VDU7COIVIQ.jpg"
              className="h-[400px] w-full object-cover"
            ></img>
          </div>
        </div>

        <footer className="fixed bottom-0 h-[60px] w-full border-t-2 flex items-center justify-between px-4 bg-white">
          <div className="w-[40px]">
            <img
              src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Home-Icon-n3fd2.png"
              alt="img"
            ></img>
          </div>
          <div className="w-[35px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/158/158740.png"
              alt="img"
            ></img>
          </div>
          <div className="w-[50px]">
            <img
              src="https://static.thenounproject.com/png/4512655-200.png"
              alt="img"
            ></img>
          </div>
          <div className="w-[40px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/341/341262.png"
              alt="img"
            ></img>
          </div>
          <div className="w-[40px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3334/3334284.png"
              alt="img"
            ></img>
          </div>
        </footer>
      </div>
    );
}

export default Sidebar;
