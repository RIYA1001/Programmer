import { useState } from 'react';

const LiveLectures = () => {
    const createMeeting = () => {
        window.open('https://meet.google.com/new', '_blank');
    };

    const [meetingId, setMeetingId] = useState('');

    const handleInputChange = (event) => {
        setMeetingId(event.target.value);
    };

    const joinMeeting = () => {
        if (meetingId.trim() !== '') {
            const trimmedId = meetingId.trim();
            const meetingLink = `https://meet.google.com/${trimmedId}`;
            window.open(meetingLink, '_blank');
        }
    };

    return (

        <div className="center mx-auto my-28 grid grid-cols-1 sm:grid-cols-2 border-4 border-gray-900 rounded-2xl shadow-md size-10/12 md:size-9/12">
            
            <div className="w-full h-full bg-gray-900">
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src='src/assets/meeting.jfif'
                    alt="Programmer icon"
                />
            </div>

            <div className="bg-gray-900 text-yellow-500 p-8">

                <h1 className="text-3xl font-bold mb-4">Live Lectures</h1>
                <p className="text-lg mb-10">Join live programming lectures conducted by experts in the field.</p>


                <button onClick={createMeeting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create a Meeting
                </button>

                <div className="my-10 border-2 border-gray-300 p-6 rounded-2xl center">

                    <input type="text" value={meetingId} onChange={handleInputChange} placeholder="Enter Meeting ID" className="border border-gray-300 rounded-md p-2 m-2" />
                    <button onClick={joinMeeting} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
                        Join Meeting
                    </button>

                </div>

            </div>


        </div>
    );
}

export default LiveLectures;