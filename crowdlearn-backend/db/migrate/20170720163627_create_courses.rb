class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.text :curriculum
      t.integer :rate

      t.timestamps
    end
  end
end
