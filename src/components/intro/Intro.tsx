
export interface IProps{
  content:String | undefined;
  description: String | undefined;
}

export default function Intro(props:IProps) {
  return (
    <div className="flex flex-row w-4/5 items-center justify-between h-1/2 bg-gray-300 rounded-lg mt-8">
      <div className="w-3/4 flex items-start justify-center flex-col p-3 ">
        <h1 className="font-bold font-be-vietnam-pro text-xl mt-2">{props.content}</h1>
          <p className="text-sm text-justify font-plus-jakarta mt-2 mb-2 leading-relaxed">{props.description}</p>
      </div>
      <div className="w-1/5 mr-5">
        <img style={{ width: '100px', height: '100px' }}
          src="https://res.cloudinary.com/dzh4pimvj/image/upload/v1719502076/logo_tiemvang-removebg-preview_smojua.png"
          alt="image" className="rounded-e-lg" />
      </div>
    </div>
  );
}
