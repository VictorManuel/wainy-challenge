import { getInitials } from '@/lib/text';
import Image from 'next/image';

export default function Avatar({ avatar, name, size = 48 }: { avatar?: string; name: string; size?: number }) {

  return avatar ? (
    <Image 
      src={avatar} 
      alt={name} 
      width={size} 
      height={size} 
      className="rounded-full object-cover"
      priority={false}
    />
  ) : (
    <div 
      className="rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600"
      style={{ width: size, height: size }}
    >
      {getInitials(name)}
    </div>
  );
}