"""changes

Revision ID: e8e353308de7
Revises: 7cdf0c80b979
Create Date: 2024-07-08 01:32:12.167810

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'e8e353308de7'
down_revision = '7cdf0c80b979'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('item_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(None, 'items', ['item_id'], ['id'])
        batch_op.drop_column('Items')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('Items', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('item_id')

    # ### end Alembic commands ###