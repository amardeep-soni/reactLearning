import { IoMdSearch } from "react-icons/io";
import { useState } from 'react'

export default function Body() {
    //  call api for dictionary and store in useState
    const [dictionary, setDictionary] = useState(null);
    const [word, setWord] = useState('');

    //  handle search input and call api
    const handleSearch = async (e) => {
        e.preventDefault();
        setDictionary(null)
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();


        if (data.length > 0) {
            console.log(data[0]);
            setDictionary(data[0]);
        }
    }
    return (
        <div className="w-[400px]">
            <p className="text-3xl font-semibold mb-5 text-purple-500">Dictionary</p>
            <form className="flex bg-slate-200 rounded-lg mb-5" onSubmit={handleSearch}>
                <input type="text" className="bg-transparent p-3 focus-visible:outline-none grow" value={word} onChange={(e) => setWord(e.target.value)} />
                <IoMdSearch className="text-2xl m-3" />
            </form>

            {dictionary ? (
                <div>
                    <p className="text-3xl">
                        {dictionary.word}
                    </p>
                    <p className="text-purple-500">{dictionary.phonetic}</p>

                    {dictionary.meanings.map((meaning) => (
                        <div key={meaning}>
                            <p className="my-4 font-bold text-2xl">{meaning.partOfSpeech}</p>
                            <p>Meaning</p>
                            <ul className="list-disc px-8">
                                {meaning.definitions.map((definition) => (
                                    <li key={definition.definition}>{definition.definition}</li>
                                ))}
                            </ul>
                            {meaning.synonyms.length != 0 && (
                                <p className="my-5">Synonyms <span className="text-purple-500">{meaning.synonyms.join(', ')}</span></p>
                            )}
                        </div>
                    ))}
                </div>
            ) : <p className="text-center">Word not found</p>}
        </div>
    )
}