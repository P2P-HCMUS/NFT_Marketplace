import { useMemo } from "react";
import Blockies from "react-blockies";
import { minifyAddress } from "../helpers";

type AddressAvatarProps = {
  address: string;
};

const AddressAvatar = ({ address }: AddressAvatarProps) => {
  const shortAddress = useMemo(() => minifyAddress(address), [address]);

  return (
    <div className="flex h-10 items-center">
      <Blockies seed={address.toLowerCase()} className="mr-2 rounded-md !w-6 !h-6" />
      <span className="text-sm">{shortAddress}</span>
    </div>
  );
};

export default AddressAvatar;
