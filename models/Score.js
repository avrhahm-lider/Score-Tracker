import z from 'zod'

export const Score = z.object({
    playerName: z.string().min(2).max(50),
    game: z.string().min(2).max(50),
    points: z.int(),
    level: z.int().nonnegative().optional(),
    duration: z.int().nonnegative().optional()
})