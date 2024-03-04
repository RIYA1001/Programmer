import { formatRelative } from 'date-fns';
import PropTypes from 'prop-types';

const Message = ({

    createdAt = null,
    text = "",
    displayName = "",
    photoURL = "",

}) => {

    return (
        <div className="mx-auto my-28 p-2">

            <div className="flex items-center">
                {photoURL ? (
                    <img src={photoURL} alt={displayName} className="rounded-full w-8 h-8" />
                ) : null}

                {displayName ? <p className="text-sm font-bold ml-2">{displayName}</p> : null}
                {createdAt?.seconds ? (
                    <span className="text-xs ml-2">
                        {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
                    </span>
                ) : null}
                <p className="text-sm ml-2">{text}</p>

            </div>

        </div>
    )
}

Message.propTypes = {
    createdAt: PropTypes.object,
    text: PropTypes.string,
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
};

export default Message