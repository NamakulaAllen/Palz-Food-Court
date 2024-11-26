"""changes

Revision ID: afc1219b4bcd
Revises: 0b5983794284
Create Date: 2024-07-07 00:40:06.841930

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'afc1219b4bcd'
down_revision = '0b5983794284'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('items', schema=None) as batch_op:
        batch_op.add_column(sa.Column('descriptions', sa.String(length=255), nullable=False))
        batch_op.drop_column('description')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('items', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', mysql.VARCHAR(length=255), nullable=False))
        batch_op.drop_column('descriptions')

    # ### end Alembic commands ###
