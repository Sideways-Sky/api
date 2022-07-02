export type UserDetails = {
    id: string
    accessToken: string
    refreshToken: string
    username: string
    discriminator: string
}

export type UpdateUserDetails = {
    accessToken: string
    refreshToken: string
    username: string
    discriminator: string
}

export type PartialGuild = {
    id: string
    name: string
    icon: string
    owner: boolean
    permissions: string
    features: string[]
}