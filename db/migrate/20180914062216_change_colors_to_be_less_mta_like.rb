class ChangeColorsToBeLessMtaLike < ActiveRecord::Migration[5.2]
  def change
    Route.where(color: 'EE352E').update_all(color: 'db2828')
    Route.where(color: '00933C').update_all(color: '21ba45')
    Route.where(color: 'B933AD').update_all(color: 'a333c8')
    Route.where(color: '6D6E71').update_all(color: '767676')
    Route.where(color: '2850AD').update_all(color: '2185d0')
    Route.where(color: 'FF6319').update_all(color: 'f2711c')
    Route.where(color: '6CBE45').update_all(color: 'b5cc18')
    Route.where(color: '996633').update_all(color: 'a5673f')
    Route.where(color: 'A7A9AC').update_all(color: 'A0A0A0')
    Route.where(color: 'FCCC0A').update_all(color: 'fbbd08')
  end
end
