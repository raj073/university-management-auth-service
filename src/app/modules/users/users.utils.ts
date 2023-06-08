import { User } from './users.model'

export const findLasTUserId = async () => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUserId?.id
}

export const generateUserId = async () => {
  const currentId = (await findLasTUserId()) || (0).toString().padStart(5, '0')

  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
