import { Card,
  Description,
  Image,
  Username,
  Usertag,
  Location,
  Stats,
  Stat,
  Label,
  Quantity, } from "./Profile.styled"

export const Profile = ({ avatar, username, location, stats, tag}) => {
  return (
    <Card>
      <Description>
        <Image src={avatar} alt={username} />
        <Username>{username}</Username>
        <Usertag>{tag}</Usertag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Stat>
      </Stats>
    </Card>)

}