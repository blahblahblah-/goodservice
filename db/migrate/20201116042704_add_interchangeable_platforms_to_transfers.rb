class AddInterchangeablePlatformsToTransfers < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :interchangeable_platforms, :boolean, null: false, default: false

    transfer = Transfer.find_by!(from_stop_internal_id: 'R31', to_stop_internal_id: 'D24')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'D24', to_stop_internal_id: 'R31')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: '222', to_stop_internal_id: '415')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: '415', to_stop_internal_id: '222')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'Q01', to_stop_internal_id: 'R23')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'R23', to_stop_internal_id: 'Q01')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'A12', to_stop_internal_id: 'D13')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'D13', to_stop_internal_id: 'A12')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'A32', to_stop_internal_id: 'D20')
    transfer.interchangeable_platforms = true
    transfer.save!

    transfer = Transfer.find_by!(from_stop_internal_id: 'D20', to_stop_internal_id: 'A32')
    transfer.interchangeable_platforms = true
    transfer.save!
  end
end
