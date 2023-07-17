import { ThreeDots } from 'react-loader-spinner';

export const ContactsLoader = () => {
  return (
    <ThreeDots
      height="50"
      width="50"
      radius="9"
      color="#21c53c"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
