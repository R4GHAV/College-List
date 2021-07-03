function cse1(){
    document.querySelector(".cse1").classList.add("selected");
    document.querySelector(".cse2").classList.remove("selected");
    document.querySelector(".cse3").classList.remove("selected");
    document.querySelector('footer').style.position ="relative"
    document.querySelector('.stud-app').innerHTML=`
    <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Mark Your Attendance</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Click on your profile and allow the site to access your front camera.</p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22051</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22052</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22053</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22054</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22055</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22056</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22057</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22058</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22059</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
}

function cse2(){
    document.querySelector(".cse1").classList.remove("selected");
    document.querySelector(".cse2").classList.add("selected");
    document.querySelector(".cse3").classList.remove("selected");
    document.querySelector('footer').style.position ="relative"
    document.querySelector('.stud-app').innerHTML=`
    <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Mark Your Attendance</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Click on your profile and allow the site to access your front camera.</p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22061</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22062</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22063</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22064</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22065</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22066</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22067</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22068</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22069</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
}

function cse3(){
    document.querySelector(".cse1").classList.remove("selected");
    document.querySelector(".cse2").classList.remove("selected");
    document.querySelector(".cse3").classList.add("selected");
    document.querySelector('footer').style.position ="relative"
    document.querySelector('.stud-app').innerHTML=`
    <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Mark Your Attendance</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Click on your profile and allow the site to access your front camera.</p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22071</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22072</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22073</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22074</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22075</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22076</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22077</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22078</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Name</h2>
                  <p class="text-gray-500">Roll no. 22079</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
}