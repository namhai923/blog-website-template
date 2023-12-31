import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { Theme } from "@/registry/themes"

type Config = {
  theme: Theme["name"]
}

const configAtom = atomWithStorage<Config>("config", {
  theme: "zinc",
})

export function useConfig() {
  return useAtom(configAtom)
}
