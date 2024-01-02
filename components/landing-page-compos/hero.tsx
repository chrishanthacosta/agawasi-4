 
import { Noto_Sans_Sinhala } from 'next/font/google'

const noto = Noto_Sans_Sinhala({
  weight: ['400', ],
  subsets: ["sinhala"],
  display: 'swap',
})

const Hero = () => {
  return (
    <div className={`${noto.className}  text-center text-xl sm:text-2xl text-purple-800 p-6  m-12   bg-slate-200 rounded-md  sm:w-[40%] h-full  w-screen   sm:h-[360px]`}>
      <span className="sm:text-4xl block font-bold">හරිත අයෝජනයකට අප හා එක්වන්න!</span>
      <span>විදේශීය වෙළදපොල සදහා නිපදවන අති දුර්ලභ</span>
      <span> මිල අධික සුවද විලවුන් සදහා භාවිතා වන අමුද්‍රව්‍ය නිපදවන ව්‍යාපෘ</span>
      <span>තියක ආයෝජනය කර අනාගතය සාර්ථක කර ගන්න.</span>
     
       
    </div>
  )
}

export default Hero