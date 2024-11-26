"""changes

Revision ID: a12758e54c14
Revises: 3e5d76f841d0
Create Date: 2024-07-03 13:53:52.285438

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'a12758e54c14'
down_revision = '3e5d76f841d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('contacts', schema=None) as batch_op:
        batch_op.drop_column('user_id')

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('location',
               existing_type=mysql.VARCHAR(length=255),
               type_=sa.String(length=50),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('location',
               existing_type=sa.String(length=50),
               type_=mysql.VARCHAR(length=255),
               nullable=True)

    with op.batch_alter_table('contacts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False))

    # ### end Alembic commands ###