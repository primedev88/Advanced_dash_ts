import { Avatar as AntdAvatar } from 'antd'
import { AvatarProps } from 'antd/lib'

type Props = AvatarProps & {
    name: string;
}

const CustomAvatar = ({name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={'JavaScript Mastery'}
      size="small"
      style={{
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none'
      }}
    >
        JM
    </AntdAvatar>
  )
}

export default CustomAvatar