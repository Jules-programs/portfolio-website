import CopyButton from "../CopyButton";

export default function Contact () {


    const GITHUB = 'https://github.com/Jules-programs';
    const LINKEDIN = 'www.linkedin.com/in/julien-mongrain';


    return (
        <div>
            <h1 className="flex justify-center text-4xl text-white font-bold text-center">Contact</h1>
            < CopyButton />
            <a className="text-gray-600 mb-6 flex justify-center" href={GITHUB}>GITHUB</a><br/>
            <a className="text-gray-600 mb-6 flex justify-center" href={LINKEDIN}>LINKEDIN</a>
        </div>
    );
}