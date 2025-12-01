type propType = {
  onClose: () => void;
};

export default function Login({ onClose }: propType) {
  return (
    <div
      className='fixed w-full inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-xs flex justify-center items-center'
      onClick={onClose}
    >
      <div className='border-black border-2 p8 bg-white dark:bg-gray-900 text-black dark:text-white rounded-md p-4'>
        <button onClick={onClose} className=''>
          X
        </button>
      </div>
    </div>
  );
}
