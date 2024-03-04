import { formatRelative } from "date-fns";
import PropTypes from "prop-types";

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  return (
    <div className="items-center m-6 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md w-1/3">
      <div className="flex mb-2">
        {photoURL ? (
          <img
            src={photoURL}
            alt={displayName}
            className="rounded-full w-8 h-8"
          />
        ) : null}

        {displayName ? (
          <p className="text-lg font-bold ml-2">{displayName}</p>
        ) : null}
      </div>

      <p className="text-sm ml-2">{text}</p>

      {createdAt?.seconds ? (
        <span className="text-xs ml-2 text-gray-500">
          {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
        </span>
      ) : null}
    </div>
  );
};

Message.propTypes = {
  createdAt: PropTypes.object,
  text: PropTypes.string,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;
