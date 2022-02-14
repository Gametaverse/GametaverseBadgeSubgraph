import { BigInt } from "@graphprotocol/graph-ts"
import {
  GMNFT,
  Approval,
  ApprovalForAll,
  ClaimNFT,
  OwnershipTransferred,
  Transfer,
  WhitelistAdded,
  WhitelistRemoved
} from "../generated/GMNFT/GMNFT"
import { ReferStatusEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleClaimNFT(event: ClaimNFT): void {
  let entity = new ReferStatusEntity(event.transaction.hash.toHex())
  entity.user = event.params._user
  entity.referer = event.params._referrer
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}

export function handleWhitelistAdded(event: WhitelistAdded): void {}

export function handleWhitelistRemoved(event: WhitelistRemoved): void {}
